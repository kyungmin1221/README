import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileImg from '../../assets/logo-profile.svg';
import sprite from '../../assets/css_sprites.png';

// 전체 프로필 페이지 wrapper
export const ProfileWrap = styled.div`
  width: 390px;
  height: 820px;
  display: flex;
  flex-direction: column;
  background-color: #d4d4d4;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

// 프로필 페이지 프로필 부분
export const ProfileDiv = styled.div`
  width: 100%;
  height: 314px;
  display: flex;
  flex-direction: column;
  margin-top: 0.5px;
  margin-bottom: 6px;
  background-color: white;
`;
export const FollowNPicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin: 30px 55px 16px;
`;
export const FollowersLink = styled(Link)`
  font-size: 18px;
  color: var(--main-text-color);
  line-height: 23px;
  font-weight: 700;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export const FollowSpan = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
  margin-top: 6px;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
`;
export const FollowingsLink = styled(Link)`
  font-size: 18px;
  color: var(--sub-text-color);
  line-height: 23px;
  font-weight: 700;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export const TextsCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
`;

export const TitSpan = styled.span`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const IdSpan = styled.span`
  color: var(--sub-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 16px;
`;

export const ContentSpan = styled.span`
  color: var(--sub-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const BtnsCont = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0px 91px 26px;
  gap: 12px;
`;
export const BtnOverlay = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChatBtn = styled.button`
  width: 21px;
  height: 21px;
  background: url(${sprite}) no-repeat -61.5px -110px/ 146px 132px;
`;
export const FollowBtn = styled.button`
  width: 120px;
  height: 34px;
  border-radius: 1rem;
  color: white;
  background-color: var(--main-color);
`;
export const ShareBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -82px -110px/ 146px 132px;
`;

// 프로필 페이지 판매중인 상품 부분
export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 208px;
  padding: 20px 0px 20px 0px;
  background-color: white;
  margin-bottom: 6px;
`;

// overflow 스크롤 통해 확인 가능
export const ProductCaro = styled.div`
  display: flex;
  padding: 0px 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const PostsDiv = styled.div`
  height: 571px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 60px;
`;

export const ProductSpan = styled.span`
  color: var(--main-text-color);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
  padding: 0px 16px;
`;

export const PostBtns = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  padding: 9px 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const ListBtn = styled.button`
  width: 26px;
  height: 26px;
  background: url(${sprite}) no-repeat 0px -36px / 146px 132px;
  background-position: ${(props) => (!props.isList ? '-26px -36px' : 'none')};
`;

export const AlbumBtn = styled.button`
  width: 26px;
  height: 26px;
  /* 백그라운드 이미지는  */
  background: url(${sprite}) no-repeat -72px 0px / 146px 132px;
  background-position: ${(props) => (props.isList ? '-72px -26px' : 'none')};
`;

// Posts 리스트형

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

// Posts 앨범형

export const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;
  padding-bottom: 76px;
`;

export const PostImg = styled.a`
  position: relative;
  width: 114px;
  height: 114px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  /* 이미지 받아와서 추가하기 */

  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    background: url(${sprite}) no-repeat -52px -36px / 146px 132px;
  }
`;

export const FooterWrap = styled.div`
  background-color: white;
  position: fixed;
  width: 390px;
  height: 60px;
  top: 760px;
`;
