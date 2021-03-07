import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";

export const StyledContainer = withStyles({
    root: {
        color: "#a9a9a9",
    },
    track: {
        height: 20,
        borderRadius: 2,
    },
    rail: {
        height: 20,
        borderRadius: 2,
    },
    mark: {
        height: 20,
        width: 1,
    }
})(Slider);