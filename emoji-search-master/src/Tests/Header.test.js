import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from "@testing-library/react";

import Header from "../Header";

describe("Header Testleri", () => {
    let title;
    
    beforeEach(() => {
        render(<Header/>);
        title = screen.getByText(/Emoji Search/i);
    })

    test("document is should have a title", () => {
        expect(title).toHaveTextContent("Emoji Search");
    })
})