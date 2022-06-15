/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-06-15 16:25:54
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-06-15 16:28:03
 * @FilePath: \next-and-nuxt\pages\_app\index.tsx
 */
import React, { ReactNode } from 'react';

type Props = {
    Component: any
    pageProps: any
};

const App = ({ Component, pageProps }: Props) => {
	return <Component {...pageProps} />;
};

export default App;
