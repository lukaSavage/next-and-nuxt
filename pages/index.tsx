/*
 * @Descripttion: next.js入门
 * @Author: lukasavage
 * @Date: 2022-06-14 21:02:18
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-06-15 15:16:04
 * @FilePath: \next-and-nuxt\pages\index.tsx
 */
import React from 'react';

type Props = {
    aaa: number
};

const Home = (props: Props) => {
	return <div>hello, next.js~
        <div style={{ color: '#f00' }}>{props.aaa}</div>
    </div>;
};

export async function getStaticProps() {
    let aaa: any = 123;
    await setTimeout(() => {
        aaa = 100;
    }, 1000);
    return {
        props: {
            aaa
        }
    }
}

export default Home;
