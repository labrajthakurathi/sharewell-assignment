"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { colorVariants, modalConfig, modalContents } from "./colors";

type ModalKey = keyof typeof modalContents;

const Page = ({ params }: { params: { color: string } }) => {
	const { color } = params;
	const router = useRouter();

	const validColors = Object.keys(modalConfig);
	const isValidColor = validColors.includes(color);

	useEffect(() => {
		if (!isValidColor) {
			router.push("/not-found"); // Redirect to the custom 404 page
		}
	}, [color, isValidColor, router]);

	if (!isValidColor) return null; // Return nothing while redirecting

	const [currentModal, setCurrentModal] = useState<ModalKey | null>(null);

	return (
		<div className={`min-h-[calc(100vh*2)] ${colorVariants[color]}`}>
			<div className='min-h-screen flex flex-col items-center justify-center'>
				<h1 className='text-white text-4xl uppercase'>{color}</h1>
				<div className='flex gap-4 mt-4'>
					{modalConfig[color]?.map((modalName) => (
						<button
							key={modalName}
							className='bg-white text-black py-2 px-4 rounded'
							onClick={() => setCurrentModal(modalName as ModalKey)}
						>
							Open {modalName}
						</button>
					))}
				</div>
				{currentModal && (
					<Modal
						onClose={() => setCurrentModal(null)}
						content={modalContents[currentModal]}
					/>
				)}
			</div>
		</div>
	);
};

export default Page;
