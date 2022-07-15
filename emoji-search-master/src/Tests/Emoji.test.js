import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

import App from "../App";
import filterEmoji from "../filterEmoji";
import EmojiResultRow from "../EmojiResultRow";

describe("Emoji Tests", () => {

    let testInstance;

    beforeEach(() => {
        render(<App/>)
    })

    test("emoji list should come", () => {
        const result = TestRenderer.create(<App emojiData={filterEmoji("", 20)}/>);
        testInstance = result.root;

        expect(testInstance.props.emojiData.length).toEqual(20);
    })

    test("emoji list should be filtered", () => {
        const input = screen.getByRole('textbox', {Name: 'filterInput'});
        userEvent.type(input, "Smile");

        expect(screen.getByText("Smile")).toBeInTheDocument();
    })

    test("emoji element should be copied", () => {
        const copiedText = screen.getByText("1234").parentNode.getAttribute("data-clipboard-text")

        expect(copiedText).toEqual("🔢")
    })

})