import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";

import dosa from '../../../../assets/food_images/dosa.webp';
import sambar from '../../../../assets/food_images/sambar.webp';
import chutney from '../../../../assets/food_images/chutney.webp';
import bread from '../../../../assets/food_images/bread.webp';
import jam from '../../../../assets/food_images/jam.webp';
import butter from '../../../../assets/food_images/butter.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';

import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import rice_lemon from '../../../../assets/food_images/rice_lemon.webp';
import rice_jeera from '../../../../assets/food_images/rice_jeera.webp';
import egg_m from '../../../../assets/food_images/egg_m.webp';
import veg_j from '../../../../assets/food_images/veg_j.webp';
import salad from '../../../../assets/food_images/salad.webp';
import frimes from '../../../../assets/food_images/frimes.webp';

import papdi_c from '../../../../assets/food_images/papdi_c.webp';

import rice_jollof from '../../../../assets/food_images/rice_jollof.webp';
import rice_fry from '../../../../assets/food_images/rice_fry.webp';
import chicken_chilly from '../../../../assets/food_images/chicken_chilly.webp';
import chicken_kasa from '../../../../assets/food_images/chicken_kasa.webp';
import paneer_chilly from '../../../../assets/food_images/paneer_chilly.webp';
import rice_kheer from '../../../../assets/food_images/rice_kheer.webp';

function SundayContent() {
    const breakfast = [
        { start: "07:00", end: "10:00" }
    ];
    const lunch = [
        { start: "13:00", end: "15:00" }
    ];
    const Snacks = [
        { start: "18:00", end: "19:00" }
    ];
    const Dinner = [
        { start: "20:00", end: "22:00" }
    ];



    const [sunday_bf, setsunday_bf] = useState(false);
    const screenRef_sunday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_bf.current && !screenRef_sunday_bf.current.contains(e.target)) {
                setsunday_bf(false);
            }
        }

        if (sunday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_bf]);


    const [sunday_l, setsunday_l] = useState(false);
    const screenRef_sunday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_l.current && !screenRef_sunday_l.current.contains(e.target)) {
                setsunday_l(false);
            }
        }

        if (sunday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_l]);


    const [sunday_s, setsunday_s] = useState(false);
    const screenRef_sunday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_s.current && !screenRef_sunday_s.current.contains(e.target)) {
                setsunday_s(false);
            }
        }

        if (sunday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_s]);


    const [sunday_d, setsunday_d] = useState(false);
    const screenRef_sunday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_d.current && !screenRef_sunday_d.current.contains(e.target)) {
                setsunday_d(false);
            }
        }

        if (sunday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_d]);






    return (
        <main>
            <center>
                <div className="menu_parent">


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_bf(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Breakfast
                                <div>
                                    <PiBread />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Masala Dosa</div>
                                    <div>Sambar</div>
                                    <div>Chutney</div>
                                    <div>Bread</div>
                                    <div>Jam</div>
                                    <div>Butter</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_bf}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Breakfast at First Light
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div>
                                        <img
                                            src={dosa}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Masala Dosa
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={sambar}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Sambar
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={chutney}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chutney
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={bread}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Bread
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={jam}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Jam
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={butter}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Butter
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={milk_tea}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Tea
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_l(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Lunch
                                <div>
                                    <PiBowlFood />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Lemon Rice / Jeera Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Egg Masala</div>
                                    <div>Veg Jaypuri</div>
                                    <div>Salad</div>
                                    <div>Frimes</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_l}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        The Afternoon Lunch Table
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={lunch} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div>
                                        <img
                                            src={rice_lemon}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Lemon Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={rice_jeera}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Jeera Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={roti}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Roti
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={dal}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dal
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={boil_v}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Mix Boiled Veg
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={egg_m}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Egg Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={veg_j}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Veg Jaypuri
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={salad}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Salad
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={frimes}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Frimes
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_s(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Snacks
                                <div>
                                    <BsCupHot size={16} />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Dahi Papdi Chaat</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_s}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Light Bites & Snacks
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div>
                                        <img
                                            src={papdi_c}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dahi Papdi Chaat
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={milk_tea}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Tea
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_d(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Dinner
                                <div>
                                    <LiaCookieSolid />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Jollof Rice / Veg Fried Rice</div>
                                    <div>Roti</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Chicken Chilly / Chicken Kasa</div>
                                    <div>Paneer Chilly</div>
                                    <div>Rice Kheer</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_d}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Elegant Evening Dinner
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={Dinner} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div>
                                        <img
                                            src={rice_jollof}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Jollof Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={rice_fry}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Veg Fried Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={roti}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Roti
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={boil_v}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Mix Boiled Veg
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={chicken_chilly}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chicken Chilly
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={chicken_kasa}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chicken Kasa
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={paneer_chilly}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Chilly
                                            </font>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={rice_kheer}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Rice Kheer
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                </div>

            </center>
        </main>
    );
}

export default SundayContent;
