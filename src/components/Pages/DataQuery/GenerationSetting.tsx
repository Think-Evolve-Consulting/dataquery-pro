import React, { useState } from 'react';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';

import { GenerationSettingIcon } from '@/components/Icons/GenerationSettingIcon';
import { GenerationSettingsModal } from '@/components/Modals/GenerationSettingsModal';

type OptionType = {
  id: number | string;
  value: string;
  label: string;
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused
      ? '1px solid rgba(59,130,246,.5)'
      : '1px solid #ddd',
    boxShadow: state.isFocused ? '0 0 5px rgba(0, 123, 255, 0.2)' : 'none',
    '&:hover': {
      borderColor: 'rgba(59,130,246,.5)',
    },
    borderRadius: '6px',
    padding: '0px 4px',
    height: '30px',
    maxHeight: '30px',
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected || state.isFocused ? '#e9f5ff' : 'white',
    color: '#333',
    padding: '8px 12px',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
    marginBottom: '4px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333',
    fontWeight: '500',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '16px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#aaa',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '6px',
    marginTop: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '4px',
    paddingBottom: '0px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#aaa',
    '&:hover': {
      color: 'rgba(59,130,246,.5)',
    },
    padding: '2px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const VISUALIZATION_LIBRARY_LIST: {
  id: number | string;
  label: string;
  value: string;
}[] = [
  { id: 1, label: 'Altair', value: 'Altair' },
  { id: 2, label: 'Matplotlib', value: 'Matplotlib' },
  { id: 3, label: 'Seaborn', value: 'Seaborn' },
  { id: 4, label: 'GGPlot', value: 'GGPlot' },
];

const GenerationSetting = () => {
  const [visualizationLibrary, setVisualizationLibrary] =
    useState<OptionType | null>(VISUALIZATION_LIBRARY_LIST?.[1] || null);
  const [isOpenGenerationSettingModal, setIsOpenGenerationSettingModal] =
    useState(false);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-2">
        <div className="flex flex-col gap-2">
          <p className=" text-xs font-normal leading-5 text-slate-500 dark:text-slate-200">
            Select a visualization library/grammar
          </p>

          {/* React Select */}

          <Select
            value={visualizationLibrary}
            onChange={setVisualizationLibrary}
            options={VISUALIZATION_LIBRARY_LIST}
            styles={customStyles}
            isSearchable={false}
          />

          {/* <select>
          {VISUALIZATION_LIBRARY_LIST.map((library) => (
            <option key={library.id} value={library.value}>
              {library.label}
            </option>
          ))}
        </select> */}
        </div>

        <div className="flex flex-col gap-2 md:items-end md:justify-end">
          <button
            onClick={() => setIsOpenGenerationSettingModal(true)}
            className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded bg-secondary px-5 py-2 text-primary ring-blue-200 transition duration-500 hover:brightness-90 focus:ring dark:bg-slate-800"
          >
            <GenerationSettingIcon />{' '}
            <span className="text-base font-normal leading-5 text-slate-700 dark:text-dark-10">
              Generation Settings
            </span>
          </button>

          <p className=" text-xs font-normal text-slate-500 opacity-80">
            Model: <span className="text-primary"> gpt-3.5-turbo-0301</span>, n:
            <span className="text-primary"> 1</span>, number of Temperature:{' '}
            <span className="text-primary"> 0</span> ...
          </p>
        </div>
      </div>

      <GenerationSettingsModal
        isOpen={isOpenGenerationSettingModal}
        setIsOpen={setIsOpenGenerationSettingModal}
      />
    </div>
  );
};

export { GenerationSetting };
