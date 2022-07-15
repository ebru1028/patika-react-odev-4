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

    test("Başlık dökümanda bulunmalı", () => {
        expect(title).toHaveTextContent("Emoji Search");
    })
})