<template>
  <div class="sidebarNav-warp">
    <div class="sidebarNav-user">
      <div class="user">
        <i class="user-avatar"><svg-icon icon-class="Avatar" class="avatar"/></i>
        <div class="user-details">
          <div class="userinfo">
            <span class="user-name">陈姗姗</span>
            <i class="gender"><svg-icon icon-class="man" class="man"/></i>
            <span class="user-age">28岁</span>
          </div>
          <span>123456789111</span>
        </div>
      </div>
      <div class="type">
        <span>电子病历</span>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .sidebarNav-warp{
    float:left;
    margin-left: 60px;
    width: 350px;
    height: 122px;
    .sidebarNav-user{
      position: relative;
      display: flex;
      width: 350px;
      height: 122px;
      background-color: #ffffff;
      box-shadow: 0px 2px 6px 0px
      rgba(109, 139, 255, 0.04);
      border-radius: 5px;
      .user{
        display: flex;
        width: 231px;
        height: 70px;
        margin-left: 20px;
        margin-top: 25px;
        .user-avatar{
          width: 68px;
          height: 68px;
          .avatar{
            width: 100%;
            height: 100%;
            margin-top: 10px;
          }
        }
        .user-details{
          display: flex;
          flex-direction: column;
          width: 145px;
          height: 46px;
          margin: 13px 0;
          font-family: MicrosoftYaHei;
          .userinfo{
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            .user-name{
              color: #333333;
            }
            .user-age{
              color: #999999;
            }
            .gender{
              width: 19px;
              height: 19px;
              margin: 0 11px 0 14px;
              .man{
                width: 100%;
                height: 100%;
              }
            }
          }
          span{
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
            margin-top: 15px;
          }
        }
      }
      .type{
        position: absolute;
        right: 0;
        top: 38px;
        width: 64px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background-color: #ffc500;
        border-radius: 11px 0px 0px 11px;
        span{
          font-family: MicrosoftYaHei;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
    }
  }

</style>