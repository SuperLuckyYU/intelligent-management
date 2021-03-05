<template>
  <div>
    <a-modal
      :width="800"
      v-model="visible"
      @ok="handleConfirmClick"
      @cancel="handleCancleClick"
      :maskClosable="false"
      okText="确认"
      cancelText="取消">
      <div slot="title">
        房间信息设置
      </div>
      <a-form-model
        :model="form"
        :rules="rules"
        v-bind="formItemLayout">
        <a-divider>商铺基本信息设置</a-divider>
        <a-form-model-item label="房间编号" prop="room_id">
          <a-input v-model="form.room_id" placeholder="请填写房间编号" />
        </a-form-model-item>
        <a-form-model-item label="商铺类型" prop="shop_type">
          <a-select v-model="form.shop_type">
            <a-select-option v-for="item in shopTypeList" :value="item.value" :key="item.value">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="商铺面积" prop="shop_area">
          <a-input-number class="w-100" v-model="form.shop_area" placeholder="请填写商铺面积" />
        </a-form-model-item>
        <a-form-model-item label="状态" prop="shop_status">
          <a-select v-model="form.shop_status">
            <a-select-option v-for="item in shopStatusList" :value="item.value" :key="item.value">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <div v-if="form.shop_status === 'rented'">
          <a-divider>租户信息设置</a-divider>
          <a-form-model-item label="店名" prop="shop_name">
            <a-input v-model="form.shop_name" placeholder="请填写店名" />
          </a-form-model-item>
          <a-form-model-item label="行业" prop="industry">
            <a-input v-model="form.industry" placeholder="请填写行业" />
          </a-form-model-item>
          <a-form-model-item label="入驻日期" prop="settle_in_at">
            <a-date-picker v-model="form.settle_in_at" placeholder="请填写入驻日期" />
          </a-form-model-item>
          <a-form-model-item label="租户姓名" prop="tenant_name">
            <a-input v-model="form.tenant_name" placeholder="请填写租户姓名" />
          </a-form-model-item>
          <a-form-model-item label="租户电话" prop="tenant_phone">
            <a-input v-model="form.tenant_phone" placeholder="请填写租户电话" />
          </a-form-model-item>
          <a-form-model-item label="其他联系人">
            <a-input v-model="form.other_concat" />
          </a-form-model-item>
          <a-form-model-item label="备用电话">
            <a-input v-model="form.alternate_phone" />
          </a-form-model-item>
          <a-form-model-item label="营业执照">
            <a-upload
              name="file"
              :multiple="true"
              v-model="form.business_license"
              action="">
              <a-button> <a-icon type="upload" /> 上传 </a-button>
            </a-upload>
          </a-form-model-item>
          <a-form-model-item label="备注">
            <a-textarea v-model="form.tenant_note" :rows="4" />
          </a-form-model-item>
          <a-divider>合同信息设置</a-divider>
          <a-form-model-item label="合同编号" prop="contract_no">
            <a-input v-model="form.contract_no" />
          </a-form-model-item>
          <a-form-model-item label="合同签约日期" prop="contract_at">
            <a-date-picker v-model="form.contract_at" placeholder="请选择合同签约日期" />
          </a-form-model-item>
          <a-form-model-item label="合同到期日期" prop="due_at">
            <a-date-picker v-model="form.due_at" placeholder="请选择合同到期日期" />
          </a-form-model-item>
          <a-form-model-item label="押金数" prop="deposit_num">
            <a-input-number class="w-100" v-model="form.deposit_num" placeholder="请填写押金金额" />
          </a-form-model-item>
          <a-form-model-item label="月租价格" prop="monthly_rent_price">
            <a-input-number class="w-100" v-model="form.monthly_rent_price" placeholder="请填写月租价格" />
          </a-form-model-item>
          <a-form-model-item label="房租周期" prop="rent_cycle">
            <a-input-number class="w-100" v-model="form.rent_cycle" placeholder="请填写房租周期" />
          </a-form-model-item>
          <a-form-model-item label="租金到期日" prop="rent_due_date">
            <a-date-picker v-model="form.rent_due_date" placeholder="请选择租金到期日" />
          </a-form-model-item>
          <a-form-model-item label="物业费到期日" prop="property_fee_due_date">
            <a-date-picker v-model="form.property_fee_due_date" placeholder="请选择物业费到期日" />
          </a-form-model-item>
          <a-form-model-item label="物业费周期" prop="property_costs_cycle">
            <a-input-number class="w-100" v-model="form.property_costs_cycle" placeholder="请填写物业费周期" />
          </a-form-model-item>
          <a-form-model-item label="下次营业执照审核日">
            <a-date-picker v-model="form.next_business_license_review_day" placeholder="请选择日期" />
          </a-form-model-item>
          <a-form-model-item label="合同">
            <a-upload
              name="contractFile"
              :multiple="true"
              v-model="form.contract"
              action="">
              <a-button> <a-icon type="upload" /> 上传 </a-button>
            </a-upload>
          </a-form-model-item>
          <a-form-model-item label="备注">
            <a-textarea v-model="form.contract_note" :rows="4" />
          </a-form-model-item>
        </div>
        <a-divider>维护信息设置</a-divider>
        <a-form-model-item label="下次电路检修日">
          <a-date-picker v-model="form.next_circuit_overhaul_day" placeholder="请选择日期" />
        </a-form-model-item>
        <a-form-model-item label="下次灭火器更换日">
          <a-date-picker v-model="form.next_fire_extinguisher_replacement_day" placeholder="请选择日期" />
        </a-form-model-item>
        <a-form-model-item label="其他1日期">
          <a-date-picker v-model="form.other1_date" placeholder="请选择日期" />
        </a-form-model-item>
        <a-form-model-item label="其他2日期">
          <a-date-picker v-model="form.other2_date" placeholder="请选择日期" />
        </a-form-model-item>
        <a-form-model-item label="备注">
          <a-textarea v-model="form.protect_note" :rows="4" />
        </a-form-model-item>
        <div v-if="form.shop_status === 'rented'">
          <a-divider>短信提醒设置</a-divider>
          <a-form-model-item label="合同到期提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.contract_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.contract_expiration_reminder">
            <a-select v-model="form.contract_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.contract_expiration_reminder">
            <a-textarea v-model="form.contract_reminder_content" :rows="4" />
          </a-form-model-item>
          <a-form-model-item label="租金到期提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.rent_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.rent_expiration_reminder">
            <a-select v-model="form.rent_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.rent_expiration_reminder">
            <a-textarea v-model="form.rent_reminder_content" :rows="4" />
          </a-form-model-item>
          <a-form-model-item label="物业费到期提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.property_costs_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.property_costs_expiration_reminder">
            <a-select v-model="form.property_costs_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.property_costs_expiration_reminder">
            <a-textarea v-model="form.property_costs_reminder_content" :rows="4" />
          </a-form-model-item>
          <a-form-model-item label="营业执照审核提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.check_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.check_expiration_reminder">
            <a-select v-model="form.check_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.check_expiration_reminder">
            <a-textarea v-model="form.check_reminder_content" :rows="4" />
          </a-form-model-item>
          <a-form-model-item label="其他1提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.other1_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.other1_expiration_reminder">
            <a-select v-model="form.other1_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.other1_expiration_reminder">
            <a-textarea v-model="form.other1_reminder_content" :rows="4" />
          </a-form-model-item>
          <a-form-model-item label="其他2提醒">
            <a-switch checked-children="开" un-checked-children="关" v-model="form.other2_expiration_reminder" />
          </a-form-model-item>
          <a-form-model-item label="几日前提醒" v-if="form.other2_expiration_reminder">
            <a-select v-model="form.other2_before_reminder_days">
              <a-select-option v-for="(item, index) in dayList" :value="index+1" :key="index">
                {{ index + 1 }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="提醒内容" v-if="form.other2_expiration_reminder">
            <a-textarea v-model="form.other2_reminder_content" :rows="4" />
          </a-form-model-item>
        </div>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      form: {
        room_id: '',
        shop_type: 'shop',
        shop_area: '',
        shop_status: 'rented',
        shop_name: '',
        industry: '',
        settle_in_at: '',
        tenant_name: '',
        tenant_phone: '',
        other_concat: '',
        alternate_phone: '',
        business_license: '',
        tenant_note: '',
        contract_no: '',
        contract_at: '',
        due_at: '',
        deposit_num: '',
        monthly_rent_price: '',
        rent_cycle: '',
        rent_due_date: '',
        property_fee_due_date: '',
        property_costs_cycle: '',
        next_business_license_review_day: '',
        contract: '',
        contract_note: '',
        next_circuit_overhaul_day: '',
        next_fire_extinguisher_replacement_day: '',
        other1_date: '',
        other2_date: '',
        protect_note: '',
        contract_expiration_reminder: false,
        contract_before_reminder_days: '',
        contract_reminder_content: '',
        rent_expiration_reminder: false,
        rent_before_reminder_days: '',
        rent_reminder_content: '',
        property_costs_expiration_reminder: false,
        property_costs_before_reminder_days: '',
        property_costs_reminder_content: '',
        check_expiration_reminder: false,
        check_before_reminder_days: '',
        check_reminder_content: '',
        other1_expiration_reminder: false,
        other1_before_reminder_days: '',
        other1_reminder_content: '',
        other2_expiration_reminder: false,
        other2_before_reminder_days: '',
        other2_reminder_content: '',
      },
      shopTypeList: [
        {
          value: 'shop',
          label: '店铺',
        },
        {
          value: 'office',
          label: '办公室',
        },
        {
          value: 'warehouse',
          label: '仓库',
        },
        {
          value: 'processing_plant',
          label: '加工',
        },
        {
          value: 'other1',
          label: '其他1',
        },
        {
          value: 'other2',
          label: '其他2',
        },
      ],
      shopStatusList: [
        {
          value: 'rented',
          label: '已租',
        },
        {
          value: 'vacant',
          label: '空置',
        },
        {
          value: 'self_use',
          label: '自用',
        },
        {
          value: 'aegis',
          label: '维护',
        },
        {
          value: 'other',
          label: '其他',
        },
      ],
      dayList: Array.from({ length: 30 }, (v, k) => k),
      rules: {
        room_id: [
          { required: true, message: '请填写房间编号' },
        ],
        shop_type: [
          { required: true, message: '请选择商铺类型' },
        ],
        shop_area: [
          { required: true, message: '请填写商铺面积' },
        ],
        shop_status: [
          { required: true, message: '请填写商铺状态' },
        ],
        shop_name: [
          { required: true, message: '请填写店名' },
        ],
        industry: [
          { required: true, message: '请填写行业' },
        ],
        settle_in_at: [
          { required: true, message: '请填写入驻日期' },
        ],
        tenant_name: [
          { required: true, message: '请填写租户姓名' },
        ],
        tenant_phone: [
          { required: true, message: '请填写租户电话' },
        ],
        contract_no: [
          { required: true, message: '请填写合同编号' },
        ],
        contract_at: [
          { required: true, message: '请选择合同签约日期' },
        ],
        due_at: [
          { required: true, message: '请选择合同到期日期' },
        ],
        deposit_num: [
          { required: true, message: '请填写押金金额' },
        ],
        monthly_rent_price: [
          { required: true, message: '请填写月租价格' },
        ],
        rent_due_date: [
          { required: true, message: '请填写租金到期日' },
        ],
        property_fee_due_date: [
          { required: true, message: '请选择物业费到期日' },
        ],
        property_costs_cycle: [
          { required: true, message: '请填写物业费周期' },
        ],
        rent_cycle: [
          { required: true, message: '请填写房租周期' },
        ],
      },
      formItemLayout: {
        wrapperCol: {
          span: 20,
        },
        labelCol: {
          span: 4,
        },
      },
    }
  },
  methods: {
    handleConfirmClick () {
      this.$emit('update:visibleAddForm', false)
    },
    handleCancleClick () {
      this.$emit('update:visibleAddForm', false)
    },
  },
}
</script>
