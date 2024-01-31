import React from "react";
import './Community.css';
import MemberIcon from '../img/member_icon.png';
import NationalIcon from '../img/national_icon.png';
import ClubsIcon from '../img/clubs_icon.png';

const Community = () => { 
    return(
        <section className="community">
            <div className="community__content">
                <p className="community__title">Manage your entire community <br/>in a single system</p>
                <p className="community__subtitle">Who is Nextcent suitable for?</p>
            </div>

            <div className="community__cards__container">
                {/* CARD 1 */}
                <div className="community__cards">
                    <div className="card__top">
                        <img src={MemberIcon} />
                        <p className="card__title">Membership Organisations</p>
                    </div>

                    <div className="card__contant">
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

                 {/* CARD 2 */}
                <div className="community__cards">
                    <div className="card__top">
                        <img src={NationalIcon} />
                        <p className="card__title">National Associations</p>
                    </div>

                    <div className="card__contant">
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

                 {/* CARD 3 */}
                 <div className="community__cards">
                    <div className="card__top">
                        <img src={ClubsIcon} />
                        <p className="card__title">Clubs And<br/> Groups</p>
                    </div>

                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    
                </div>

            </div>
        </section>
    )
}

export default Community;