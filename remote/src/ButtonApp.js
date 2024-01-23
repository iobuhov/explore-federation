import { createApp } from "vue";
import Button from "./components/Button.vue";

export default function init(props) {
    return createApp(Button, props);
}
