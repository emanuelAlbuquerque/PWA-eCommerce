import { Footer, FooterNavegacao, FooterRedesSociais } from "./styles";
import { LocationIcon } from "../../assets/Icons/General/Location";
import { Youtube } from "../../assets/Icons/General/Youtube";
import { Instagram } from "../../assets/Icons/General/Instagram";
import { Twitter } from "../../assets/Icons/General/Twitter";
import { Facebook } from "../../assets/Icons/General/Facebook";

export function FooterWeb() {
  return (
    <Footer>
      <FooterNavegacao>
        <ul>
          <li>Shop by Category</li>
          <li><a href="">Skincare</a></li>
          <li><a href="">Personal Care</a></li>
          <li><a href="">Handbags</a></li>
          <li><a href="">Apparels</a></li>
          <li><a href="">Watches</a></li>
          <li><a href="">Eye Wear</a></li>
          <li><a href="">Jewellery</a></li>
        </ul>
        <ul>
          <li>About</li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Press</a></li>
        </ul>
        <ul>
          <li>Policy</li>
          <li><a href="">Return Policy</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Sitemap</a></li>
          <li><a href="">Security</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">EPR Compliance</a></li>
        </ul>
      </FooterNavegacao>

      <FooterRedesSociais>
        <div className="redes_sociais">
          <ul>
            <li>
              <a href="">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_localizacao">
          <div className="localizacao">
            <LocationIcon />
            <p>United States</p>
          </div>
          <p className="footer_copyright">© 2021 | Cora Leviene All Rights Reserved</p>
        </div>
      </FooterRedesSociais>
    </Footer>
  )
}
