/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const URL = "https://billions-api.nomadcoders.workers.dev/";

type BillionPerson = {
	id: string;
	name: string;
	squareImage: string;
	netWorth: number;
	industries: string[];
};

const getBillions = (): Promise<BillionPerson[]> => {
	return fetch(URL).then((response) => response.json());
};

export default async function Home() {
	const result = await getBillions();
	return (
		<div className="w-full m-auto">
			<div className="grid grid-cols-4 justify-center m-8 gap-4">
				{result.map((item) => {
					return (
						<Link
							key={item.id}
							href={`/person/${item.id}`}
							className="flex flex-col cursor-pointer">
							<img
								src={item.squareImage}
								alt="Image"
								width={416}
								height={416}
							/>
							<div className="mt-2 text-xl font-bold">{item.name}</div>
							<div>
								{Number(item.netWorth / 1000).toFixed(0)} Billion / {item.industries.join(",")}
							</div>
						</Link>
					);
				})}
				<div>card</div>
				<div>card</div>
				<div>card</div>
			</div>
		</div>
	);
}
