import React from 'react';

// Emoji Mart 
// npm i emoji-mart
// https://www.npmjs.com/package/emoji-mart
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

// Tailwind CSS heroicons/react
import { 
    CalendarIcon, 
    ChartBarIcon, 
    EmojiHappyIcon, 
    PhotographIcon, 
    XCircleIcon 
} from '@heroicons/react/outline';

export default function Input() {
    // Hooks
    const [ input, setInput ] = React.useState("");
    const [selectedFile, setSelectedFile ] = React.useState(null);
    const [showEmojis, setShowEmojis ] = React.useState(false);
    const [loading, setLoading ] = React.useState(false);
    const filePickerRef = React.useRef(null);


    const addEmoji = (e) => {
        let sys = e.unified.split("-");
        let codesArray = [];
        sys.forEach(el => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    }

    const sendPost = () => {
        if (loading) return;
        setLoading(true);

        const decRef = ''
    };

    const addImageToPost = () => {};

    return (
        <div className='boder-b border-gray-700 space-x-3 flex 
            overflow-y-scroll p-3 scrollbar-hide'>
            <img src="/images/Pattern.png" alt='' className='h-11 w-11 rounded-full cursor-pointer' />
            <div className='w-full divide-y divide-gray-700'>
                <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        name='' 
                        rows='2' 
                        placeholder="What's happening?"
                        className='bg-transparent outline-none text-[#d9d9d9] \
                        placeholder-gray-500 text-lg tracking-wide w-full min-h-[50px]'
                    />  

                    {
                        selectedFile && (
                            <div className='relative'>
                                <div onClick={() => setSelectedFile(null)} className='absolute w-8 h-8 bg-[#15181c]
                                hover:bg-[#272c26] bg-opacity-75 
                                rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'>

                                    <XCircleIcon className='text-white h-5' />
                                </div> 
                                <img src={selectedFile} alt="" className='rounded-2xl max-h-80 object-contain' />
                            </div>
                        )
                    }

                     
                </div>

                <div className='flex items-center justify-between pt-2.5 '>
                    <div className='flex items-center'>
                        <div className='icon' onClick={() => filePickerRef.current.click()}>
                            {/* CONTINUE FROM HERE */}
                            <PhotographIcon className='h-[22px] text-[#1d9bf0] cursor-pointer' />
                            <input 
                                type="file" 
                                hidden 
                                ref={filePickerRef}
                                onChange={addImageToPost} 
                            />
                        </div>
                        <div className='icon rotate-90'>
                            <ChartBarIcon className='h-[22px] text-[#1d9bf0] cursor-pointer' />
                        </div>

                        <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className='h-[22px] text-[#1d9bf0] cursor-pointer' />
                        </div>

                        <div className='icon'>
                            <CalendarIcon className='h-[22px] text-[#1d9bf0] cursor-pointer' />
                        </div>

                    

                        

                        
                    </div>
                    <button className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 
                        font-bold shadow-md hover:bg-[#1a8cd8] 
                        disabled:hover:bg-[#1d9bf0] disabled:opacity-50 
                        disabled:cursor-default'
                        disabled={!input.trim() && !selectedFile}
                        onClick={sendPost}
                    >
                        Tweet
                    </button>

                    {
                        showEmojis && (
                            <Picker 
                                onSelect={addEmoji}
                                style={{
                                    position: "absolute",
                                    marginTop: "465px",
                                    marginLeft: -40,
                                    maxWidth: "320px",
                                    borderRadius: "20px",
                                }}
                                theme="dark"
                            />
                        )
                    }
                    
                </div>
                
            </div>
        </div>
    )
}
