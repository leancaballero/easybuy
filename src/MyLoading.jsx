import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "./MyStyle.css";

const MyLoading = () => (
      <Article key={'spin'}>
        <ReactLoading type={'spin'} color="#FF5733" />
        <Prop>{'Spin'}</Prop>
      </Article>
);

export default MyLoading;
