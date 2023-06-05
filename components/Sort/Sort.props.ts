import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}
