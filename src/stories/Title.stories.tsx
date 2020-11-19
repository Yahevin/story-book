import * as React from "react";
// import Title from "@/stories/Title";
import Title from "./Title";

export default {
    title: 'Example/Title',
    component: Title,
};

const Template = (args: { title: string }) => <Title {...args} />;

export const HelloWorld = Template.bind({});
// @ts-ignore
HelloWorld.args = {
    title: 'hw'
};