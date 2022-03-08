<script>
import { Radio, RadioGroup, RadioButton } from "./index";
    let test = ['1',
    '1',
    '1',
    '1',
    '1',
    '选中且禁用',
    '3',
    '3',
    '上海',
    '1',
    '1',
];
    const Radiochange = (e) => {
        console.log(e.detail.target.value);
    };
    const RadioGroupchange = (e) => {
        console.log(e.detail);
    };
</script>
<Radio bind:value="{test[0]}" label="1" text="提示文本" />
<Radio bind:value="{test[0]}" label="2" text="提示文本2"/>
<hr/>
<Radio bind:value="{test[1]}" label="1" border text="边框提示文本" />
<Radio bind:value="{test[1]}" label="2" border text="边框提示文本2" />
<hr/>
<Radio bind:value="{test[2]}" label="1" border size="mini" text="边框提示文本" />
<Radio bind:value="{test[2]}" label="2" border size="mini" text="边框提示文本2" />
<hr/>
<Radio bind:value="{test[3]}" label="1" on:change={Radiochange}>备选项 A</Radio>
<Radio bind:value="{test[3]}" label="2" on:change={Radiochange}>备选项 A</Radio>
<Radio bind:value="{test[3]}" label="3" on:change={Radiochange}>备选项 A</Radio>
<hr/>
<Radio bind:value="{test[4]}" label="1">备选项 B</Radio>
<Radio bind:value="{test[4]}" label="2">备选项 B</Radio>
<Radio bind:value="{test[4]}" label="3">备选项 B</Radio>
<hr/>
<Radio bind:value="{test[5]}" disabled label="禁用">备选项</Radio>
<Radio bind:value="{test[5]}" disabled label="选中且禁用">备选项</Radio>
<hr/>

<RadioGroup bind:value="{test[6]}" radiodata={[
    {value:'3',label:'3',text:'自动创建1'},
    {value:'6',label:'6',text:'自动创建2'},
    {value:'9',label:'9',text:'自动创建3'},
]}/>
<hr/>
<RadioGroup bind:value="{test[6]}" radiodata={[
    {value:'3',label:'3',text:'自动创建1'},
    {value:'6',label:'6',text:'自动创建2',disabled:true},
    {value:'9',label:'9',text:'自动创建3'},
]}/>
<hr/>
<RadioGroup bind:value="{test[6]}" radiodata={['3','6','9',]}/>
<hr/>

<RadioGroup bind:value="{test[6]}" on:change={RadioGroupchange}>
    <Radio label="3">备选项点击取值</Radio>
    <Radio label="6">备选项点击取值</Radio>
    <Radio label="9">备选项点击取值</Radio>
</RadioGroup>
<hr/>
<RadioGroup bind:value="{test[6]}" size="medium">
    <Radio label="3" border>备选项medium</Radio>
    <Radio label="6" >备选项medium</Radio>
    <Radio label="9">备选项medium</Radio>
</RadioGroup>
<hr/>
<RadioGroup bind:value="{test[6]}" size="small">
    <Radio label="3">备选项small</Radio>
    <Radio label="6" border>备选项small</Radio>
    <Radio label="9">备选项small</Radio>
</RadioGroup>
<hr/>
<RadioGroup bind:value="{test[6]}" size="mini">
    <Radio label="3" border>备选项mini</Radio>
    <Radio label="6" border>备选项mini</Radio>
    <Radio label="9" border>备选项mini</Radio>
</RadioGroup>
<hr/>
<RadioGroup bind:value="{test[6]}" disabled>
    <Radio label="3">备选项disabled</Radio>
    <Radio label="6">备选项disabled</Radio>
    <Radio label="9">备选项disabled</Radio>
</RadioGroup>
<hr/>
<RadioGroup>
    <Radio bind:value="{test[7]}" label="3">备选项</Radio>
    <Radio bind:value="{test[7]}" label="6">备选项</Radio>
    <Radio bind:value="{test[7]}" label="9">备选项</Radio>
</RadioGroup>
<hr/>
        <RadioButton bind:value={test[8]} label="上海" />
        <RadioButton bind:value={test[8]} label="北京" size="medium"/>
        <RadioButton bind:value={test[8]} label="广州" size="small"/>
        <RadioButton bind:value={test[8]} label="深圳" size="mini"/>
        <hr/>
 <div>
    <RadioGroup bind:value="{test[8]}">
        <RadioButton label="上海" text="上海111"/>
        <RadioButton label="北京" text="北京111"/>
        <RadioButton label="广州" text="广州111"/>
        <RadioButton label="深圳" text="深圳111"/>
    </RadioGroup>
</div>

<div style="margin-top: 20px">
    <RadioGroup bind:value="{test[8]}" size="medium">
        <RadioButton label="上海" />
        <RadioButton label="北京" />
        <RadioButton label="广州" />
        <RadioButton label="深圳" />
    </RadioGroup>
</div>
<div style="margin-top: 20px">
    <RadioGroup bind:value="{test[8]}" size="small">
        <RadioButton label="上海" />
        <RadioButton label="北京" disabled />
        <RadioButton label="广州" />
        <RadioButton label="深圳" />
    </RadioGroup>
</div>
<div style="margin-top: 20px">
    <RadioGroup bind:value="{test[8]}" disabled size="mini">
        <RadioButton label="上海" />
        <RadioButton label="北京" />
        <RadioButton label="广州" />
        <RadioButton label="深圳" />
    </RadioGroup>
</div>
<hr/>
<div>
    <Radio bind:value="{test[9]}" label="1" border>备选项1</Radio>
    <Radio bind:value="{test[9]}" label="2" border>备选项2</Radio>
</div>
<div style="margin-top: 20px">
    <Radio bind:value="{test[10]}" label="1" border size="medium">备选项1</Radio>
    <Radio bind:value="{test[10]}" label="2" border size="medium">备选项2</Radio>
</div>
<div style="margin-top: 20px">
    <RadioGroup bind:value="{test[0]}" size="small">
        <Radio label="1" border>备选项1</Radio>
        <Radio label="2" border disabled>备选项2</Radio>
    </RadioGroup>
</div>
<div style="margin-top: 20px">
    <RadioGroup bind:value="{test[0]}" size="mini" disabled>
        <Radio label="1" border>备选项1</Radio>
        <Radio label="2" border>备选项2</Radio>
    </RadioGroup>
</div>
<br />
<br />
<RadioGroup bind:value="{test[8]}" textcolor="#000" fill="#333" backgroundcolor="#fff">
    <RadioButton label="上海" text="上海111"/>
    <RadioButton label="北京" text="北京111"/>
    <RadioButton label="广州" text="广州111"/>
    <RadioButton label="深圳" text="深圳111"/>
</RadioGroup>
<br />
<br />

<br />
<br />

<style>
</style>
