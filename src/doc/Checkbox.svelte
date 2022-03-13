<script>
    import { Checkbox, CheckboxButton, CheckboxGroup } from "./index";
    let test = [true, false, true];
    let checkList = ["选中且禁用", "复选框 A"];

    function onchange(e) {
        console.log(e);
        // console.log(e.detail.target.checked);
    }

    // indeterminate 状态
    const cityOptions = ["上海", "北京", "广州", "深圳"];
    let isIndeterminate = true;
    let checkAll = false;
    let checkedCities = ["上海", "广州"];
    // 全选
    function handleCheckAllChange(e) {
        console.log(e.detail);
        // console.log('q1',e.detail);
        checkedCities = e.detail ? cityOptions : [];
        console.log("全选", checkedCities, cityOptions);
        isIndeterminate = false;
    }

    function handleCheckedCitiesChange({ detail }) {
        console.log(detail, cityOptions);
        let checkedCount = detail.length;
        checkAll = checkedCount === cityOptions.length;
        // console.log('doc',checkedCount,checkAll,detail,cities);
        isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length;
    }
    // console.log(cities);
    let tortilla = "Plain";
    let fillings = [];
    function Checkboxchange({ detail }) {
        console.log(detail);
    }
    let a = ["A", "D"];
    let a1 = ["A", "B", "C", "D"];

    const citybuttonOptions = ["上海", "北京", "广州", "深圳"];
    let checkboxGroup1 = ["上海"];
    let checkboxGroup2 = ["上海"];
    let checkboxGroup3 = ["上海"];
    let checkboxGroup4 = ["上海"];
    let checkboxGroup5 = ["上海"];
    let checkboxGroup6 = ["上海"];
    let cities = citybuttonOptions;

    let checked1 = true;
    let checked2 = false;
    let checked3 = false;
    let checked4 = true;
    let checkboxGroup_1 = [];
    let checkboxGroup_2 = [];
</script>


<Checkbox bind:value={test[0]}>备选项</Checkbox>
<Checkbox text="备选项text" on:change={onchange} />

<hr />
<Checkbox bind:value={test[1]} disabled>备选项1</Checkbox>
<Checkbox bind:value={test[2]} disabled>备选项2</Checkbox>

<hr />
<CheckboxGroup
    bind:group={checkList}
    options={[
        { value: "复选框 A", label: "复选框 A" },
        { value: "复选框 B", label: "复选框 B" },
        { value: "复选框 C", label: "复选框 C" },
        { value: "禁用", label: "禁用", disabled: true },
        { value: "选中且禁用", label: "选中且禁用", disabled: true },
    ]}
    on:change={onchange}
/>
<hr />

<Checkbox bind:indeterminate={isIndeterminate} bind:value={checkAll} on:change={handleCheckAllChange}>全选</Checkbox>
<CheckboxGroup bind:group={checkedCities} options={cityOptions} on:change={handleCheckedCitiesChange} />
<hr />

<CheckboxGroup bind:group={a} options={a1} /> 
    <hr />


<CheckboxGroup bind:group={checkedCities} options={cityOptions} min={1} max={2} />
<hr />

<hr />
<CheckboxGroup>
    {#each cities as city}
        <CheckboxButton bind:group={checkboxGroup1} label={city} :key={city}>{city}</CheckboxButton>
    {/each}
</CheckboxGroup>

<hr />
<CheckboxGroup bind:group={checkboxGroup1} options={cities} type="button" />
<hr />
<CheckboxGroup bind:group={checkboxGroup2} options={cities} type="button" size="medium" />
<hr />
<CheckboxGroup bind:group={checkboxGroup3} options={cities} type="button" size="small" disabled/>
<hr />
<CheckboxGroup bind:group={checkboxGroup4} options={cities} type="button" size="mini" />
<hr />
<CheckboxGroup>
    {#each cities as city}
        <CheckboxButton bind:group={checkboxGroup5} disabled={city === '北京'} label={city} key={city}>{city}</CheckboxButton>
    {/each}
</CheckboxGroup>
<hr />
<CheckboxGroup disabled size="mini">
    {#each cities as city}
        <CheckboxButton bind:group={checkboxGroup6} label={city} key={city}>{city}</CheckboxButton>
    {/each}
</CheckboxGroup>
<hr />
<CheckboxGroup size="mini" textColor="#000" fill="#333" backgroundcolor="#fff">
    {#each cities as city}
        <CheckboxButton bind:group={checkboxGroup6} label={city} key={city}>{city}</CheckboxButton>
    {/each}
</CheckboxGroup>
<hr />

<Checkbox value={checked1} label="备选项1" border />
<Checkbox value={checked2} label="备选项2" border />
<hr />
<Checkbox value={checked3} label="备选项1" border size="medium" />
<Checkbox value={checked4} label="备选项2" border size="medium" />
<hr />
<CheckboxGroup bind:group={checkboxGroup1} size="small">
    <Checkbox label="备选项1" border />
    <Checkbox label="备选项2" border disabled />
</CheckboxGroup>
<hr />
<CheckboxGroup bind:group={checkboxGroup2} size="mini" disabled>
    <Checkbox label="备选项1" border />
    <Checkbox label="备选项2" border />
</CheckboxGroup>
<hr />

<style>
</style>
