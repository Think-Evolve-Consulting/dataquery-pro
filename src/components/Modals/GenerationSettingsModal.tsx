import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';

import { useDarkMode } from '@/contexts/DarkMode';

import { GenerationSettingIcon } from '../Icons/GenerationSettingIcon';

type OptionType = {
  id: number | string;
  value: string;
  label: string;
};

interface GenerationSettingsModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

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

const MODEL_PROVIDER_LIST: {
  id: number | string;
  label: string;
  value: string;
}[] = [
  { id: 1, label: 'openai', value: 'openai' },
  { id: 2, label: 'palm', value: 'palm' },
  { id: 3, label: 'cohere', value: 'cohere' },
  { id: 4, label: 'huggingface', value: 'huggingface' },
];

const MODEL_LIST: {
  id: number | string;
  label: string;
  value: string;
}[] = [
  {
    id: 1,
    label: 'TheBloke/Llama-2-7b-chat-fp16',
    value: 'TheBloke/Llama-2-7b-chat-fp16',
  },
  {
    id: 2,
    label: 'uukuguy/speechless-llama2-hermes-orca-platypus-13b',
    value: 'uukuguy/speechless-llama2-hermes-orca-platypus-13b',
  },
];

const GenerationSettingsModal = ({
  isOpen,
  setIsOpen,
}: GenerationSettingsModalProps) => {
  const { isDarkMode } = useDarkMode();

  const [modelProvider, setModelProvider] = useState<OptionType | null>(
    MODEL_PROVIDER_LIST?.[0] || null
  );
  const [model, setModel] = useState<OptionType | null>(
    MODEL_LIST?.[0] || null
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <Modal
      onRequestClose={() => {
        setIsOpen(false);
      }}
      isOpen={isOpen}
      className="Modal"
      ariaHideApp={false}
      bodyOpenClassName="!overflow-hidden"
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 10005,
        },
        content: {
          outline: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          maxWidth: '800px',
          width: '100%',
        },
      }}
    >
      <div className="zoomIn relative flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-5 dark:bg-gray-900">
        <p className="flex flex-row items-center justify-start gap-2 text-primary">
          <GenerationSettingIcon />
          <span className="text-lg font-semibold leading-6 tracking-wide text-slate-700 dark:text-dark-10">
            Generation Settings
          </span>
        </p>

        <button
          className="absolute right-4 top-4 text-secondary"
          onClick={() => {
            setIsOpen(false);
          }}
          type="button"
        >
          <MdClose size={24} color={isDarkMode ? '#F7FAFC' : '#334155'} />
        </button>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Model Provider{' '}
                  <span className="text-xs text-primary">
                    {modelProvider?.label}
                  </span>
                </p>

                <p className="text-xs font-normal leading-5 text-slate-500 dark:text-slate-200">
                  Model provider e.g. openai, huggingface etc
                </p>
              </div>

              <Select
                value={modelProvider}
                onChange={setModelProvider}
                options={MODEL_PROVIDER_LIST}
                styles={customStyles}
                isSearchable={false}
              />
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Model{' '}
                  <span className="text-xs text-primary">{model?.label}</span>
                </p>

                <p className="text-xs font-normal leading-5 text-slate-500 dark:text-slate-200">
                  The model to use for generation.
                </p>
              </div>

              <Select
                value={model}
                onChange={setModel}
                options={MODEL_LIST}
                styles={customStyles}
                isSearchable={false}
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Max Tokens{' '}
                  <span className="text-xs text-primary">
                    {modelProvider?.label}
                  </span>
                </p>

                <p className="text-xs font-normal leading-4 text-slate-500 dark:text-slate-200">
                  Maximum number of tokens to generate.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Temperature{' '}
                  <span className="text-xs text-primary">{model?.label}</span>
                </p>

                <p className="text-xs font-normal leading-4 text-slate-500 dark:text-slate-200">
                  The higher the temperature, the crazier the text.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Number Messages{' '}
                  <span className="text-xs text-primary">
                    {modelProvider?.label}
                  </span>
                </p>

                <p className="text-xs font-normal leading-4 text-slate-500 dark:text-slate-200">
                  The number of responses to generate.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Presence Penalty{' '}
                  <span className="text-xs text-primary">{model?.label}</span>
                </p>

                <p className="text-xs font-normal leading-4 text-slate-500 dark:text-slate-200">
                  Number between -2.0 and 2.0. Positive values penalize new
                  tokens based on whether they appear in the text so far,
                  increasing the model's likelihood to talk about new topics.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
                  Frequency Penalty-2{' '}
                  <span className="text-xs text-primary">
                    {modelProvider?.label}
                  </span>
                </p>

                <p className="text-xs font-normal leading-4 text-slate-500 dark:text-slate-200">
                  Number between -2.0 and 2.0. Positive values penalize new
                  tokens based on whether they appear in the text so far,
                  increasing the model's likelihood to talk about new topics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm font-normal leading-5 text-slate-700 dark:text-dark-10">
          Learn more about OpenAI model parameters{' '}
          <Link
            href={'https://platform.openai.com/docs/api-reference/chat'}
            target="_blank"
            className="border-b border-b-primary hover:text-primary"
          >
            here
          </Link>
          {'.'}
        </p>

        <div className="flex flex-row items-center justify-end gap-2">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="rounded-md border border-secondary bg-transparent px-4 py-1 text-sm font-normal leading-5 text-slate-700 dark:text-dark-10"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="rounded-md border border-primary bg-primary px-4 py-1 text-sm font-normal leading-5 text-white"
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { GenerationSettingsModal };
