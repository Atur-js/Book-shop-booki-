import React,{Fragment} from "react";
import {IntlProvider} from "react-intl";
import { LOCALES } from "./locales";
import messages from './messages'

interface Props {
    chidren: any;
    locale:any;
}

const Provider: React.FC<Props> = ({children,locale = LOCALES.EN})=> (
    <IntlProvider 
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
)

export default Provider;