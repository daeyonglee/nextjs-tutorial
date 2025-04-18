import { NextPage } from "next";

/* eslint-disable @next/next/no-img-element */
const URL = "https://billions-api.nomadcoders.workers.dev/person";

type Person = {
	id: string;
	city: string;
	name: string;
	country: string;
	position: number;
	industries: string[];
	financialAssets: [
		{
			exchange: string;
			ticker: string;
			companyName: string;
			numberOfShares: number;
			sharePrice: number;
			currencyCode: string;
			exchangeRate: number;
			interactive: boolean;
		}
	];
	squareImage: string;
	bio: string[];
	about: string[];
	netWorth: number;
};

const getPerson = (id: string): Promise<Person> => {
	return fetch(`${URL}/${id}`).then((response) => response.json());
};

const PersonDetailPage: NextPage<{ params: Promise<{ id: string }> }> = async ({ params }) => {
	const { id } = await params;
	const result = await getPerson(id);
	console.log(result);
	return (
		<div className="w-full m-auto my-10">
			<div className="flex flex-col items-center justify-center">
				<div className="w-1/2 bg-gray-900 p-6 rounded-2xl">
					<img
						src={result.squareImage}
						alt="Image"
						width={416}
						height={416}
					/>
					<div className="text-xl font-bold my-4">{result.name}</div>
					<div>networth: {result.netWorth}</div>
					<div>country: {result.country}</div>
					<div>industry: {result.industries.join(", ")}</div>
					<div className="mt-2 pb-20">{result.about?.join(", ")}</div>
				</div>
				<div className="w-1/2 bg-gray-900 p-6 my-6 rounded-2xl">
					<div className="text-xl font-bold my-4">Financial Assets</div>
					<div className="grid grid-cols-4 gap-4">
						{result.financialAssets.map((asset, index) => {
							return (
								<div
									key={index}
									className="border-1 p-4 rounded-2xl">
									<div>Company: {asset.companyName}</div>
									<div>Ticker: {asset.ticker}</div>
									<div>Shares: {asset.numberOfShares}</div>
									<div>Share Price: {asset.sharePrice}</div>
									<div>Currency Code: {asset.currencyCode}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonDetailPage;
