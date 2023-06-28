import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

test("should render App", () => {
    const component: MyPromise = render(App);

    expect(component).toBeTruthy();
});