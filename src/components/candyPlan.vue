<template>
    <div   class="program-wrapper">
        <div  class="program-title">超级守护者计划</div>
        <div  class="program-rate-outter-wrapper">
            <div  class="program-rate-wrapper">
                <div  class="program-rate">2.00<span  class="program-rate-percentage">%</span></div>
                <div  class="program-rate-daily">每日收益</div>
            </div>
        </div>
        <div  class="program-info-wrapper">
            <div  class="program-info">
                <div  class="program-info-title">已存入额度</div>
                <div  class="current-number">24022296 OATH</div>
            </div>
            <div  class="program-progress-bar-wrapper">
                <div  class="program-progress-bar-outter"></div>
                <div  class="program-progress-bar-inner" style="width: 80.0743%;"></div>
            </div>
        </div>
        <div  class="program-tags-wrapper">
            <div  class="program-tag">15天回报</div>
            <div  class="program-tag">每日派息</div>
            <div  class="program-tag">年化730%</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.program-wrapper {
  width: 2.50rem;
  // margin-left: 0.20rem;
  -webkit-box-shadow: 0rem 2px 10px 0px rgba(158, 169, 190, 0.65);
  box-shadow: 0rem 0.02rem 0.10rem 0rem rgba(158, 169, 190, 0.65);
  border-radius: 0.10rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right -0.60rem top 0.25rem;
  background-image: url(../assets/imgs/bg1.png);
  background-color: #EEFFF9;
  position: relative;
}
.program-title {
  font-family: Montserrat-SemiBold;
  color: #454A54;
  font-size: 0.18rem;
  padding-top: 0.14rem;
  text-align: left;
  margin-left: 0.14rem;
}
.program-rate-outter-wrapper {
  margin-top: 0.16rem;
}
.program-rate {
  font-family: Montserrat-Bold;
  color: #6691FD;
  font-size: 0.50rem;
  text-align: left;
  margin-left: 0.14rem;
}
.program-rate-percentage {
  font-size: 0.24rem;
  margin-left: -10rem;
}
.program-rate-daily {
  font-size: 0.13rem;
  margin-left: 0.14rem;
  text-align: left;
  margin-top: -0.08rem;
}
.program-rate-year {
  text-align: left;
  margin-left: 0.14rem;
  font-size: 0.17rem;
  margin-top: -0.06rem;
}
.program-tags-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0.14rem;
  margin-top: 0.10rem;
  padding-bottom: 0.10rem;
}
.program-tag {
  font-size: 0.12rem;
  padding: 0.03rem 0.06rem;
  border-radius: 0.04rem;
  margin-right: 0.08rem;
  background-color: #6691FD;
  color: white;
}
.program-info-wrapper {
  height: 0.30rem;
}
.program-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.26rem;
  position: relative;
  height: 0.20rem;
}
.program-info-title {
  font-size: 0.12rem;
  left: 0.14rem;
  position: absolute;
}
.current-number {
  font-size: 0.12rem;
  right: 0.14rem;
  text-align: right;
  position: absolute;
}
.program-progress-bar-wrapper {
  position: relative;
}
.program-progress-bar-outter {
  height: 0.05rem;
  width: 2.22rem;
  background: #B6C2E2;
  left: 0.14rem;
  position: absolute;
  top: 0rem;
  display: block;
}
.program-progress-bar-inner {
  height: 0.05rem;
  width: 40%;
  background: #6691FD;
  position: absolute;
  left: 0.14rem;
}
</style>