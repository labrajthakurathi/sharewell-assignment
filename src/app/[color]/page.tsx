"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal, { ModalContent } from "@/components/Modal";

const modalContents: Record<string, ModalContent> = {
	"Modal 1": {
		title: "Modal 1",
		subTitle: "Lorem Ipsum is simply",
		date: "Thursday, Jun 22, 2024",
		time: "06:00pm - 07:30pm EST",
		paragraph:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	},
	"Modal 2": {
		title: "Modal 2",
		subTitle: "Lorem Ipsum is also",
		date: "Friday, Jun 23, 2024",
		time: "07:00pm - 08:30pm EST",
		paragraph:
			"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	},
	"Modal 3": {
		title: "Modal 3",
		subTitle: "Lorem Ipsum is wack",
		date: "Wednesday, Jun 21, 2023",
		time: "07:00pm - 07:30pm EST",
		paragraph:
			"Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
};

const modalConfig: Record<string, string[]> = {
	green: ["Modal 1", "Modal 2"],
	blue: ["Modal 2", "Modal 3"],
	red: ["Modal 1", "Modal 3"],
};

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

	const openModal = (modalName: ModalKey) => {
		setCurrentModal(modalName);
	};

	const closeModal = () => {
		setCurrentModal(null);
	};
	const colorVariants: Record<string, string> = {
		green: "bg-green-500",
		red: "bg-red-500",
		blue: "bg-blue-500",
	};

	return (
		<div className={`min-h-[calc(100vh*2)] ${colorVariants[color]}`}>
			<div className='min-h-screen flex flex-col items-center justify-center'>
				<h1 className='text-white text-4xl uppercase'>{color}</h1>
				<div className='flex content-center gap-4 mt-4'>
					{/* Rendering Button based on the url */}
					{modalConfig[color].map((modalName) => (
						<button
							key={modalName}
							className='bg-white text-black py-2 px-4 rounded'
							onClick={() => openModal(modalName)}
						>
							Open {modalName}
						</button>
					))}
				</div>
				{/* Rendering Modal based on the current modal state */}
				{currentModal && (
					<Modal
						onClose={closeModal}
						content={modalContents[currentModal]}
					/>
				)}
			</div>
		</div>
	);
};

export default Page;
