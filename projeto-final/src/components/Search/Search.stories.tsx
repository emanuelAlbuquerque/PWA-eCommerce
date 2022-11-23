import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { Search, SearchProps } from "./Search";

export default {
  title: 'Search/Search',
  component: Search,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Search iconOne={<Placeholder />} iconTwo={<Placeholder />} />
  </>
)