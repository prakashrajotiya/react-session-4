import MemberCard from "./membercard";
import Member from "../../data";
const MemberList = () => {
  const memberList = Member.map((member) => {
    return <MemberCard member={member} key={member.id} />;
  });
  return memberList;
};
export default MemberList;
