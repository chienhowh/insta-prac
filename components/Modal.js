import { logEvent } from '@firebase/analytics'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modol-atom'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
    const filepickerRef = useRef(null);
    const [file, setFile] = useState(null);
    const addImgToPost = (e) => {
        console.log(e);
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            console.log(readerEvent.target.result);
            setFile(readerEvent.target.result);
        }

    }

    return (<Transition.Root show={open} >
        <Dialog className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setOpen(false)}>
            <div className="flex items-end justify-center sm-min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Use one Transition.Child to apply one transition to the overlay... */}
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <span className="inline-block align-middle h-[200px]" aria-hidden="true"></span>
                {/* Content */}
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p:6">
                        <div>
                            {/* image part */}
                            {file ? (
                                <img src={file} className="w-full object-contain cursor-pointer" onClick={() => setFile(null)}></img>) :
                                (<div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-red-100 cursor-pointer" onClick={() => {
                                    filepickerRef.current.click();
                                    console.log(filepickerRef);
                                }}>
                                    <CameraIcon className="w-6 h-6 text-red-500" aria-hidden="true"></CameraIcon>
                                </div>)}

                            {/* comment part */}
                            <div>
                                <Dialog.Title className="text-lg text-center sm:mt-5">Upload a photo</Dialog.Title>
                                <div>
                                    <input ref={filepickerRef} onChange={addImgToPost} type="file" hidden></input>
                                </div>
                                <div>
                                    <input type="text" className="border-none focus:ring-0 w-full text-center"></input>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300">
                                        Upload Post
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ... */}
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>)

}

export default Modal
