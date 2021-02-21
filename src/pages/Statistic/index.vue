<template>
  <div>
    <div class="title">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">基础数据统计</h6>
    </div>
    <a-card class="content mt-2">
      <a-row>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="商场总面积"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="已租面积"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置面积"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#cf1322' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置面积占比"
              :value="50"
              suffix="%"
              :value-style="{ color: '#745AF5' }" />
          </a-card>
        </a-col>
      </a-row>
      <a-row class="mt-2">
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="商场店铺总数"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="已租店铺总数"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置店铺数"
              :value="1000"
              :precision="2"
              suffix="㎡"
              :value-style="{ color: '#cf1322' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置店铺占比"
              :value="50"
              suffix="%"
              :value-style="{ color: '#745AF5' }" />
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <div class="title mt-4">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">资金数据统计</h6>
    </div>
    <div class="descriptions mt-2">
      <div class="descriptions-title d-flex">
        <div class="descriptions-title-item" />
        <div class="descriptions-title-item">本月已收</div>
        <div class="descriptions-title-item">本月待收</div>
        <div class="descriptions-title-item">本季度已收</div>
        <div class="descriptions-title-item">本季度待收</div>
        <div class="descriptions-title-item">本年已收</div>
        <div class="descriptions-title-item">本月待收</div>
      </div>
      <div class="descriptions-content">
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">租金</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">物业费</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">管理费</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">灭火器</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">营业执照</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
      </div>
    </div>
    <div class="title mt-4">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">风险数据统计</h6>
    </div>
    <div class="descriptions mt-2">
      <div class="descriptions-title d-flex">
        <div class="descriptions-title-item" />
        <div class="descriptions-title-item">本月未缴商户数</div>
        <div class="descriptions-title-item">占比商场总商户</div>
        <div class="descriptions-title-item">本季度未交商户数</div>
        <div class="descriptions-title-item">占比商场总商户</div>
        <div class="descriptions-title-item">本年未交商户数</div>
        <div class="descriptions-title-item">占比商场总商户</div>
      </div>
      <div class="descriptions-content">
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">租金</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">物业费</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">管理费</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">灭火器</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">营业执照</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
          <div class="descriptions-content-item">￥18.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
  .title {
    .icon {
      display: inline-block;
    }
    .title_text {
      display: inline-block;
      vertical-align: inherit;
    }
  }
  .content {
    background: #f0f2f5;
    .content-item {
      width: 80%;
      margin: auto;
    }
  }
  .descriptions {
    border: 1px solid #e8e8e8;
  }
  .descriptions-title-item {
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    background-color: rgb(242, 249, 252);
  }
  .descriptions-row {
    border-bottom: 1px solid #e8e8e8;
    background: #fff;
    .descriptions-content-item {
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .descriptions-content-item:first-of-type {
      background-color: rgb(226, 237, 243);
      font-weight: bold;
    }
  }
  .descriptions-row:last-of-type {
    border-bottom: none;
  }
</style>
