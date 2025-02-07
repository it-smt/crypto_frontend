import cryptoImage from "../../../assets/img/crypto.png";
import "./Statistics.scss";

export default function Statistics() {
	return (
		<div className="statistics">
			<h2 className="statistics__title">My Statistics</h2>
			<hr />
			<div className="statistics__body">
				<p className="statistics__text">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<div className="statistics__img">
					<img src={cryptoImage} alt="" />
				</div>
				<p className="statistics__text">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English. Many desktop publishing packages and web
					page editors now use Lorem Ipsum as their default model text, and a
					search for 'lorem ipsum' will uncover many web sites still in their
					infancy.
				</p>
			</div>
		</div>
	);
}
