import React from "react";

import { FormControl } from "../from-control";
import { Legend } from "../legend";

const getFormControl = (item: any) => (
  <FormControl key={item.label} {...item} />
);

export const SettingFieldset = ({
  legend,
  fields,
  classModifier,
  isLegend,
}: any) => (
  <fieldset className="nav-setting__fieldset">
    {isLegend && <Legend legend={legend} />}

    <ul className={`list-unstyled nav-setting__list nav-setting__list--${classModifier}`}>
      {fields.map(getFormControl)}
    </ul>
  </fieldset>
);
