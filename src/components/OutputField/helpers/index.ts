import { MutableRefObject } from 'react';

import { TDropdownValue, TFieldValue, TData } from '../types';

const getValueFromFields = (fieldRef: MutableRefObject<(HTMLDivElement | null)[]>): TFieldValue[] => {
  const resultArr = [];

  for (let i = 0; i < fieldRef.current.length; i++) {
    if (fieldRef.current[i]) {
      resultArr.push({ position: i, value: fieldRef.current[i]?.innerText || '' });
    }
  }

  return resultArr;
};

const concatDropdownsAndFieldsValues = (fieldsArr: TFieldValue[], dropdownsArr: TDropdownValue[]): TData[] => {
  const concatedArray = fieldsArr;

  dropdownsArr.forEach((dropdown) => concatedArray.push(dropdown));

  return concatedArray;
};

const getSortedString = (concatedValues: TData[]): string => {
  let resultStringValues = '';
  const sortedByPosition = concatedValues.sort((a, b) => a.position - b.position);

  sortedByPosition.forEach((item) => (resultStringValues += `${item.value} `));

  return resultStringValues;
};

export const getDataFromDropdownsAndFields = (
  fieldRef: MutableRefObject<(HTMLDivElement | null)[]>,
  dropdownValues: TDropdownValue[],
): string => {
  const valuesFromFields = getValueFromFields(fieldRef);
  const concatedDropdownsAndFieldsValues = concatDropdownsAndFieldsValues(valuesFromFields, dropdownValues);
  const sortedString = getSortedString(concatedDropdownsAndFieldsValues);

  return sortedString;
};
