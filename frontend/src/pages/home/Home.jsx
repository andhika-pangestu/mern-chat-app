import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[850px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding '>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
