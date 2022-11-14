import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react'
import { languageOptions } from "../../src/utils/language";
import { useLanguageStore } from "../../store/store";
import { HiOutlineChevronDown } from "react-icons/hi"
import TranslateIcon from "../../src/resources/TranslateIcon.jsx"

const LangSelect = () => {
  const { userLanguage, userLanguageChange } = useLanguageStore((state) => state)
  const selectSplitNames = languageOptions[userLanguage].split(' ')
  const [mouseOver, setMouseOver] = useState(false)
  const getIconColor = (open) => {
    if (mouseOver && !open) return "rgb(56 189 248)" //hover blue
    if (open) return "rgb(14 165 233)" // active blue
    return "rgb(163 163 163)" //gray
  }
  return (
    <>
      <Listbox value={userLanguage} onChange={userLanguageChange}  >
        {
          ({ open }) =>
            <div className="relative">
              <Listbox.Button className="relative w-full  rounded-lg  py-2 pl-3 pr-9 text-left hover:cursor-pointer transition-all duration-100 group font-medium focus:border-0 focus-visible:border-0 focus-within:border-0 active:border-0 focus:outline-none focus-within:outline-none" onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
                <div className="flex items-center justify-center">
                  <TranslateIcon color={getIconColor(open)} width="1.5em" height="1.5em" customClassName="mr-[5px] transition-colors" />
                  <span className={`block truncate group-hover:opacity-70 active:opacity-100 transition-all ${open ? "opacity-100" : ""}`}>{`${selectSplitNames[0].slice(0, 2).toUpperCase()}`}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiOutlineChevronDown className={`${open ? "-rotate-180 opacity-100 text-gray-900" : ""} transition-all text-xl text-gray-600 group-hover:opacity-70`} />
                  </span>
                </div>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#ececec] bg-opacity-70 py-1 text-base focus:outline-none focus-within:outline-none shadow-md" >
                  {Object.entries(languageOptions).map(([id, name]) => (
                    <Listbox.Option
                      key={id}
                      value={id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-4 hover:cursor-pointer ${active ? 'bg-neutral-900 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {name.split(' ').shift()}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center  text-amber-600">
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
        }

      </Listbox>
    </>
  );
}

export default LangSelect;
