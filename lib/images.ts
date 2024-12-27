import Banquet from "@/assets/community_images/banquet.jpg";
import ClarkKerrSunGuangbo from "@/assets/community_images/clark_kerr_sun_guangbo.jpg";
import LunchAfterPractice from "@/assets/community_images/lunch_after_practice.jpg";
import SFKungfuFestival from "@/assets/community_images/sf_kungfu_festival_sifu.jpg";
import TenderloinRuler from "@/assets/community_images/tenderloin_ruler.jpg";
import ClarkKerrSalute from "@/assets/community_images/clark_kerr_salute.jpg";
import ClubPhoto2024 from "@/assets/community_images/club_photo.jpg";

import OrientalDoor from "@/assets/hero_images/oriental_door_taiji.jpg";
import SifuWithSword from "@/assets/hero_images/sifu_with_sword.jpg";

import { CarouselItem } from "./types";

export const communityImages: CarouselItem[] = [
  {
    image: ClarkKerrSunGuangbo,
    caption: "Performance of Sun Guangbo at the Clark Kerr campus."
  },
  {
    image: LunchAfterPractice,
    caption: "Waiting for lunch after weekend practice!"
  },
  {
    image: SFKungfuFestival,
    caption: "Sifu Bryant Fong performing at the SF Kungfu Festival."
  },
  {
    image: TenderloinRuler,
    caption: "CalTaiji performing at the SF Tenderloin Community Center."
  },
  {
    image: Banquet,
    caption: "CalTaiji at the UCMAP Banquet!"
  },
  {
    image: ClubPhoto2024,
    caption: "End of year group photo!"
  }
];

export const heroImages = [
  OrientalDoor,
  ClarkKerrSalute,
  ClubPhoto2024,
  SifuWithSword
];
