import { colors } from "./colors";

export const getStyles = {
  getErrorInput: (isError) => {
    if (isError) {
      return {
        border: `2px solid ${colors.erorColor}`,
        color: `${colors.erorColor}`,
      };
    }
    return null;
  },
};
