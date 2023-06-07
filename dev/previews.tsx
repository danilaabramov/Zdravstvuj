import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Start from "../screens/Start";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Start">
        <Start />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;