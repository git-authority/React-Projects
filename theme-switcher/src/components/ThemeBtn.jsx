export default function ThemeBtn() {


    return (
        <label className="relative inline-flex items-center cursor-pointer">

            {/* Hidden Checkbox */}
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
            />

            {/* Visual Toggle Slider (Circle and Background) */}
            <div className="w-11 h-6 bg-gray-200
            peer-focus:outline-none
            dark:peer-focus:ring-blue-800 rounded-full peer
            dark:bg-gray-700
            peer-checked:after:translate-x-full
            peer-checked:after:border-white
            after:content-['']
            after:absolute after:top-[2px] after:left-[2px]
            after:bg-white
            after:border-gray-300
            after:border after:rounded-full
            after:h-5
            after:w-5
            after:transition-all
            dark:border-gray-600
            peer-checked:bg-blue-600"></div>


            {/* Text Toggle Theme */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>

        </label>
    );
}

