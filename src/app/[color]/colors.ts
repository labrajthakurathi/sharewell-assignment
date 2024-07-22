import { ModalContent } from "@/components/Modal";

export const modalContents: Record<string, ModalContent> = {
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
export const modalConfig: Record<string, string[]> = {
	green: ["Modal 1", "Modal 2"],
	blue: ["Modal 2", "Modal 3"],
	red: ["Modal 1", "Modal 3"],
};

export const colorVariants: Record<string, string> = {
	green: "bg-green-500",
	red: "bg-red-500",
	blue: "bg-blue-500",
};
