import React from "react";
import { FormattedMessage } from "react-intl";

const t = (id: string | any,value={}) => <FormattedMessage id={id} values={{...value}}/>

export default t;