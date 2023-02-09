import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

function App() {
  return (
    <div className="flex flex-col justify-center items-flex-end bg-[#EDEAE8] w-44 shadow-md">
      <div>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Image profile"
          className="rounded-full w-40 h-54"
        />
      </div>

      <div>
        <ul>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8] shadow-lg">
              <HomeOutlinedIcon />
              Home
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <CallOutlinedIcon />
              Contact
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <EmailOutlinedIcon />
              Message
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <SettingsOutlinedIcon />
              Settings
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <PeopleAltOutlinedIcon />
              Accounts
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <LockOutlinedIcon />
              Locks
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <BarChartOutlinedIcon />
              Statistics
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <ForumOutlinedIcon />
              Community
            </button>
          </li>
          <li>
            <button className="bg-[#E5E0DE] w-40 flex justify-between text-base p-2 m-2 rounded-xl cursor-pointer hover:bg-[#EDEAE8]">
              <LogoutOutlinedIcon />
              Logout
            </button>
          </li>
        </ul>
        
        <div className="flex justify-start items-center p-2 w-45">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Image profile"
            className="rounded-full w-10"
          />
          <p className="text-base font-light pl-2">Badis Zoghmar</p>
        </div>
      </div>
    </div>
  );
} 

export default App;
