import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";

Modal.defaultStyles.overlay.backgroundColor = "#ffffff80";
Modal.setAppElement("body");

export function PotteryModal(props) {
    const { selected, setSelected } = props;

    const [isOpen, setIsOpen] = useState(false);

    const potteryType = (selected ?? '').split('-')[0];
    const potteryFilename = (selected ?? '').split('-')[1];

    const potteryTitle = (potteryFilename ?? '').replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase());

    const closeModal = () => {
        setIsOpen(false);
        setSelected(undefined);
    };

    useEffect(() => {
        if (selected) {
            setIsOpen(true);
        }
    }, [selected])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className=" focus:outline-none p-4 z-50 bg-white my-8 overflow-auto max-w-fit m-auto shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] rounded-sm">
            {potteryFilename && (
                <div>
                    <div className="top-0 sticky flex justify-between items-center bg-white py-4 px-6">
                        <div className="w-8"></div>
                        <div className="font-bold flex space-x-4">
                            <h1 className="w-24 text-center">{potteryTitle}</h1>
                        </div>
                        <div
                            className="cursor-pointer p-2 text-xl hover:text-slate-400"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal()
                            }}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </div>
                    </div>
                    <div className="space-y-2 px-6 pb-4">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <LazyLoadImage
                                className="max-h-[60vh]"
                                alt={"image of pottery " + potteryTitle}
                                src={require(`../../../img/pottery_2026/${potteryType}/${potteryFilename}.jpg`)}
                                placeholder={
                                    <div className="h-[80vh] w-[54vh] bg-gray-100"></div>
                                }
                            />
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    )

}
