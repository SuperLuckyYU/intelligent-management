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
              title="总房间数"
              :value="1000"
              suffix="间"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="已租间数"
              :value="100"
              suffix="间"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="已租数占比"
              :value="10"
              suffix="%"
              :value-style="{ color: '#cf1322' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置间数"
              :value="900"
              suffix="间"
              :value-style="{ color: '#745AF5' }" />
          </a-card>
        </a-col>
      </a-row>
      <a-row class="mt-2">
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置店铺占比"
              :value="50"
              suffix="%"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="自用间数"
              :value="30"
              suffix="间"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="维护间数"
              :value="10"
              suffix="间"
              :value-style="{ color: '#cf1322' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="其他（其他状态的间数）"
              :value="200"
              suffix="间"
              :value-style="{ color: '#745AF5' }" />
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <div class="title mt-4">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">面积数据统计</h6>
    </div>
    <a-card class="content mt-2">
      <a-row>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="总面积"
              :value="1000"
              suffix="㎡"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="已租面积"
              :value="100"
              suffix="㎡"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="空置面积"
              :value="10"
              suffix="㎡"
              :value-style="{ color: '#cf1322' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="自用面积"
              :value="900"
              suffix="㎡"
              :value-style="{ color: '#745AF5' }" />
          </a-card>
        </a-col>
      </a-row>
      <a-row class="mt-2">
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="维护面积"
              :value="50"
              suffix="㎡"
              :value-style="{ color: '#2A92F6' }" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="content-item" :hoverable="true">
            <a-statistic
              title="其他"
              :value="200"
              suffix="㎡"
              :value-style="{ color: '#3f8600' }" />
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <div class="title mt-4">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">租金数据统计</h6>
    </div>
    <div class="descriptions mt-2">
      <div class="descriptions-title d-flex">
        <div class="descriptions-title-item" />
        <div class="descriptions-title-item">本月已收</div>
        <div class="descriptions-title-item">本月待收</div>
      </div>
      <div class="descriptions-content">
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">租金间数</div>
          <div class="descriptions-content-item">34</div>
          <div class="descriptions-content-item">22</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">租金总数</div>
          <div class="descriptions-content-item">￥1800.00</div>
          <div class="descriptions-content-item">￥16000.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">租金占比</div>
          <div class="descriptions-content-item">70%</div>
          <div class="descriptions-content-item">30%</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">物业费间数</div>
          <div class="descriptions-content-item">500</div>
          <div class="descriptions-content-item">200</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">物业费总数</div>
          <div class="descriptions-content-item">￥11000.00</div>
          <div class="descriptions-content-item">￥1800.00</div>
        </div>
        <div class="descriptions-row d-flex">
          <div class="descriptions-content-item">物业费占比</div>
          <div class="descriptions-content-item">10%</div>
          <div class="descriptions-content-item">90%</div>
        </div>
      </div>
    </div>
    <div class="title mt-4">
      <a-icon class="icon mr-2" type="filter" /><h6 class="title_text">到期数据统计</h6>
    </div>
    <a-descriptions bordered class="mt-2">
      <a-descriptions-item label="合同已到期">
        10
      </a-descriptions-item>
      <a-descriptions-item label="合同即将">
        46
      </a-descriptions-item>
      <a-descriptions-item label="租金已到期">
        13
      </a-descriptions-item>
      <a-descriptions-item label="租金即将">
        89
      </a-descriptions-item>
      <a-descriptions-item label="物业费已到期">
        33
      </a-descriptions-item>
      <a-descriptions-item label="物业费即将到期">
        40
      </a-descriptions-item>
      <a-descriptions-item label="营业执照已到期">
        10
      </a-descriptions-item>
      <a-descriptions-item label="营业执照即将审核">
        55
      </a-descriptions-item>
      <a-descriptions-item label="电路检修已到期">
        54
      </a-descriptions-item>
      <a-descriptions-item label="电路检修即将检修">
        24
      </a-descriptions-item>
      <a-descriptions-item label="灭火器更换">
        98
      </a-descriptions-item>
      <a-descriptions-item label="其他1已到期">
        57
      </a-descriptions-item>
      <a-descriptions-item label="其他1即将到期">
        121
      </a-descriptions-item>
      <a-descriptions-item label="其他1已到期">
        43
      </a-descriptions-item>
      <a-descriptions-item label="其他2即将到期">
        86
      </a-descriptions-item>
    </a-descriptions>
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
