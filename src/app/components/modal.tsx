'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center" // 'fixed' - фіксує позицію на екрані, 'inset-0' - займає весь екран, 'z-50' - накладається поверх інших елементів, 'flex items-center' - використовує flexbox і центрує по вертикалі
        onClose={onClose}
      >
        {/* Затемнення фону */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" // 'ease-out' - плавний початок анімації, 'duration-300' - тривалість 300 мс
          enterFrom="opacity-0" // Початковий стан - прозорість 0
          enterTo="opacity-100" // Кінцевий стан - прозорість 100%
          leave="ease-in duration-200" // 'ease-in' - плавне завершення анімації, 'duration-200' - тривалість 200 мс
          leaveFrom="opacity-100" // Початковий стан при закритті - прозорість 100%
          leaveTo="opacity-0" // Кінцевий стан при закритті - прозорість 0
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          {/* 'fixed inset-0' - займає весь екран, 'bg-gray-500' - сірий фон (відтінок 500), 'bg-opacity-75' - прозорість 75%, 'transition-opacity' - додає плавну зміну прозорості */}
        </Transition.Child>

        {/* Модальне вікно */}
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
          {/* 'relative' - позиціонується відносно батьківського елемента
              'transform' - дозволяє використовувати CSS-трансформації
              'overflow-hidden' - приховує все, що виходить за межі
              'rounded-lg' - заокруглення великих кутів
              'bg-white' - білий фон
              'shadow-xl' - велика тінь
              'transition-all' - анімує всі зміни
              'p-7' - внутрішні відступи (padding) 7 (28px)
              'mx-auto' - автоматичні зовнішні відступи по горизонталі (центрування)
              'sm:my-10' - на малих екранах вертикальні відступи 10 (40px)
              'sm:w-full' - на малих екранах ширина 100%
              'sm:max-w-2xl' - на малих екранах максимальна ширина 2xl (672px) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 hover:bg-slate-300 hover:w-6 hover:h-6 hover:rounded-full"
            // 'absolute' - абсолютне позиціонування
            // 'top-4' - відступ зверху 4 (16px)
            // 'right-4' - відступ справа 4 (16px)
            // 'text-gray-600' - сірий колір тексту (відтінок 600)
            // 'hover:text-gray-900' - при наведенні стає темно-сірим (відтінок 900)
          >
            &#x2715;
          </button>

          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
