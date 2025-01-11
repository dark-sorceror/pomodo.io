import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"; // Add EffectCoverflow module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./styles.css";
import dragonImage from '../../assets/dragon_4.jpg';
import SeasonPass from "../SeasonPass/SeasonPass";

const BizarreBazaar = () => {
	const [selectedDragon, setSelectedDragon] = useState(null);
	const [seasonPass, setSeasonPass] = useState(false);

	const dragons = [
		{ id: 1, name: "Fire Drake", xp: 1500, image: dragonImage },
		{ id: 2, name: "Ice Wyrm", xp: 1200, image: dragonImage },
		{ id: 3, name: "Shadow Serpent", xp: 1700, image: dragonImage },
		{ id: 4, name: "Fire Drake", xp: 1500, image: dragonImage },
		{ id: 5, name: "Ice Wyrm", xp: 1200, image: dragonImage },
		{ id: 6, name: "Shadow Serpent", xp: 1700, image: dragonImage },
	];

	const handleDragonSelect = (id) => {
		setSelectedDragon(id);
	};

	if (seasonPass) {
		return <SeasonPass />;
	}

	return (
		<div className="bizarre-bazar">
			{/* Header */}
			<h1 className="header">Bizarre Bazaar</h1>

			{/* Dragon Slider */}
			<div className="slider-container">
				<Swiper
					navigation
					pagination={{ clickable: true }}
					spaceBetween={30}
					slidesPerView={3}
					centeredSlides={true}
					effect="coverflow"
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
					}}
					modules={[Navigation, Pagination, EffectCoverflow]}
					className="dragon-slider"
				>
					{dragons.map((dragon) => (
						<SwiperSlide key={dragon.id}>
							<div
								className={`dragon-card ${selectedDragon === dragon.id ? "selected" : ""}`}
								onClick={() => handleDragonSelect(dragon.id)}
							>
								<img
									src={dragon.image}
									alt={dragon.name}
									className="dragon-image"
								/>
								<div className="dragon-info">
									<h2>{dragon.name}</h2>
									<p>XP: {dragon.xp}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Selected Dragon Info
      {selectedDragon && (
        <div className="selected-dragon-info">
          <h2>
            You selected: {dragons.find((d) => d.id === selectedDragon)?.name}
          </h2>
          <p>
            XP: {dragons.find((d) => d.id === selectedDragon)?.xp}
          </p>
        </div>
      )} */}

			{/* Category Buttons */}
			<div className="categories">
				<button className="category-button">Dragons</button>
				<button className="category-button" onClick={() => setSeasonPass(true)}>
					Avatars
				</button>
				<button className="category-button">Swords</button>
			</div>
		</div>
	);
};

export default BizarreBazaar;