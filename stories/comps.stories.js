import {Button} from '../comps/buttons/buttons';
import {Graph} from '../comps/bargraphs/bargraphs';
import {Header} from '../comps/header/header';
import {PieGraph} from '../comps/piegraph/piegraph';
import {Title} from "../comps/title/title";
import {Logo} from "../comps/logo/logo";

export default {
    title:"My Components"
}

export const MyButton = () => Button;
export const MyGraph = () => Graph;
export const MyHeader = () => Header;
export const MyPieGraph = () => PieGraph;
export const MyLogo = () => Logo;
export const MyTitle = () => Title;