import { useNavigate } from "react-router-dom";
import { ArrowRight } from "../../assets/Icons/General/ArrowRight";
import { LinkButton } from "../Buttons/LinksButtons/LinksButton";
import { Container } from "./style";

export function ReferAndEarn(){
  const navigate = useNavigate()

  const handleClickNavigate =  () => {
    navigate('/')
  }

  return(
    <Container>
      <div>
        <h1>Invite Friends & Earn</h1>
        <p>Get uptp 100 reward points for every friend you invite</p>
        <LinkButton 
          variant="default" 
          text="Invate Now" 
          icon={<ArrowRight className="arrowConvite"/>} 
          className="iconInvite" 
          onClick={handleClickNavigate}
        />
      </div>
      <div>
      </div>
    </Container>
  )
}