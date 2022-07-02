// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package org.apache.doris.nereids.operators.plans.logical;

import org.apache.doris.nereids.operators.OperatorType;
import org.apache.doris.nereids.properties.LogicalProperties;
import org.apache.doris.nereids.trees.expressions.Expression;
import org.apache.doris.nereids.trees.expressions.Slot;
import org.apache.doris.nereids.trees.plans.GroupPlan;
import org.apache.doris.nereids.trees.plans.Plan;
import org.apache.doris.nereids.trees.plans.PlanOperatorVisitor;

import com.google.common.collect.ImmutableList;

import java.util.List;


/** GroupPlanOperator. */
public class GroupPlanOperator extends LogicalLeafOperator {
    public GroupPlanOperator() {
        super(OperatorType.GROUP_PLAN);
    }

    @Override
    public <R, C> R accept(PlanOperatorVisitor<R, C> visitor, Plan plan, C context) {
        return visitor.visitGroupPlan((GroupPlan) plan, context);
    }

    @Override
    public List<Slot> computeOutput() {
        throw new IllegalStateException("GroupPlanOperator can not compute output."
            + " You should invoke GroupPlan.getOutput()");
    }

    @Override
    public LogicalProperties computeLogicalProperties(Plan... inputs) {
        throw new IllegalStateException("GroupPlanOperator can not compute logical properties."
            + " You should invoke GroupPlan.getLogicalProperties()");
    }

    @Override
    public List<Expression> getExpressions() {
        return ImmutableList.of();
    }
}
