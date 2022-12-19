import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const UserName = styled.strong`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const AccountName = styled.p`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--sub-text-color);
`;

export const MoreBtn = styled.button`
  width: 18px;
  height: 18px;
  margin-top: 4px;
  margin-left: auto;
  background: url(${sprite}) no-repeat -102px -110px / 146px 132px;
`;

export const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 304px;
  float: right;
`;

export const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const PostImg = styled.img`
  width: 100%;
  height: 228px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  object-fit: cover;
`;

export const ActionBtns = styled.div`
  display: flex;
  gap: 16px;
`;

export const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -22px -110px / 146px 132px;
`;

export const CommentBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -62px -110px / 146px 132px;
`;

export const CountNum = styled.span`
  margin-left: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: var(--sub-text-color);
`;

export const CreatedDate = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
`;
