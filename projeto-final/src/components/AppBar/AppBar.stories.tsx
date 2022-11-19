import { Meta, Story } from "@storybook/react";
import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { AppBar, AppBarProps } from "./AppBar";

export default {
  title: 'AppBar/AppBar',
  component: AppBar,
} as Meta<AppBarProps>

export const PageTitle: Story<AppBarProps> = () => (
  <>
    <GlobalStyle />
    <AppBar variant="PageTitle">
      <div>
        <button>
          <Placeholder />
        </button>
        <p>Search</p>
      </div>
      <div>
        <button><Placeholder /></button>
        <button><Placeholder /></button>
        <button><Placeholder /></button>
      </div>
    </AppBar >
  </>
)
export const Search: Story<AppBarProps> = () => (
  <>
    <GlobalStyle />
    <AppBar variant="Search">
      <div>
        <button>
          <Placeholder />
        </button>
        <p>Search</p>
      </div>
      <div>
        <button><Placeholder /></button>
        <button><Placeholder /></button>
        <button><Placeholder /></button>
      </div>
    </AppBar >
  </>
)