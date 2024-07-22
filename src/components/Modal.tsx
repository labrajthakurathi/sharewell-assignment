import React from "react";
import Logo from "../images/icon.png";
import Image from "next/image";

export interface ModalContent {
	title: string;
	subTitle: string;
	date: string;
	time: string;
	paragraph: string;
}

interface ModalProps {
	onClose: () => void;
	content: ModalContent;
}

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
	const { title, subTitle, date, time, paragraph } = content;
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div
				className='fixed inset-0 bg-black opacity-50'
				onClick={onClose}
			></div>

			<div className='w-10/12 sm:mx-w-80 md:max-w-2xl font-poppins'>
				<div className='h-76 relative bg-sharewell-blue rounded-t-xl p-6 pt-12 sm:p-12 shadow-xl z-10'>
					<div className='content text-white'>
						<p className='text-3xl'>{title}</p>
						<p className='text-xs py-3'>{subTitle}</p>
						<p className='text-sm'>{date}</p>
						<p className='text-sm'>{time}</p>
					</div>
					<div className='img absolute right-0 bottom-0'>
						<Image
							src={Logo}
							alt='Modal Image'
							className='h-32 sm:h-52 w-auto'
						/>
					</div>
				</div>

				<div className='relative bg-white rounded-b-xl p-6 text-black'>
					<button
						className='text-3xl font-extralight absolute top-4 right-6 text-gray-500 hover:text-gray-700'
						onClick={onClose}
					>
						&times;
					</button>

					<p className='text-sm font-light'>Lorem Ipsum</p>
					<p className='text-base font-bold text-sharewell-blue pb-4'>
						Lorem Ipsum
					</p>
					<p className='text-sm font-light pb-6'>{paragraph}</p>
					<div className='-mx-6'>
						<hr className='border-t border-gray-300 mb-6' />
					</div>

					<p className='text-sm pb-2.5 font-normal text-center'>
						Lorem Ipsum is simply dummy text.
					</p>
					<button className='w-full bg-green-100 hover:bg-green-200 text-gray-300 text-base font-normal py-2 px-4 rounded-lg'>
						Lorem Ipsum
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
